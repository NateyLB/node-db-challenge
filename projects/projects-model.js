const db = require("../data/db-config.js");
const Tasks = require('../tasks/tasks-model.js');

module.exports={
    addProject,
    getProjects,
    getProjectByID,
    getProjectResources

}

function addProject(project){
    return db("projects").insert(project)
}

function getProjects(){
    return db("projects")
}

function getProjectResources(projectID){
    return db("project_resources")
    .join("projects", "project_resources.projectID", "=", "projects.id" )
    .join("resources", "project_resources.resourceID", "=", "resources.id")
    .select("project_resources.id", "resources.resourceName as name", "resources.description" )
    .where("projects.id", projectID)
}
function getProjectByID(projectID){
    return new Promise((resolve, reject)=>{
        console.log("before promise")
        Promise.all([db("projects").where("id", projectID).first(), 
                        Tasks.getTasks().select("id", "description", "notes", "completed").where("tasks.projectID", projectID), 
                        getProjectResources(projectID)])
        .then(values=>{
            console.log("IN THEN")
            if(values){
                console.log("IN IF")
                resolve({
                    id:values[0].id, 
                    name:values[0].projectName, 
                    description: values[0].description,
                    completed: !!parseInt(values[0].completed),  
                    tasks: values[1].map(task=>{
                        return({
                            id: task.id,
                            description: task.description,
                            notes: task.notes,
                            completed: !!parseInt(task.completed)
                        })
                    }),
                    resources: values[2]
                 })
            }else{
                const errorObject = {message: "Could not get that project"}
                reject(errorObject)
            }
        })
    })
}