
exports.up = function(knex) {
    return knex.schema
    .createTable("projects", projects=>{
        projects.increments();
        projects.string("projectName").notNullable();
        projects.string("description");
        projects.boolean("completed").defaultTo(0);
    })
    .createTable("tasks", tasks=>{
        tasks.increments();
        tasks
            .integer("projectID")
            .unsigned()
            .notNullable()
            .references("projects.id")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
        tasks.string("description").notNullable();
        tasks.string("notes");
        tasks.boolean("completed").defaultTo(0);
    })
    .createTable("resources", resources=>{
        resources.increments();
        resources.string("resourceName").notNullable();
        resources.string("description");
    })

    .createTable("project_resources", project_resources=>{
        project_resources.increments();
        project_resources
            .integer("projectID")
            .unsigned()
            .notNullable()
            .references("projects.id")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
        project_resources
        .integer("resourceID")
        .unsigned()
        .notNullable()
        .references("resources.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects")
};
