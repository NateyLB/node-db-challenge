
exports.seed = function(knex) {
      return knex('project_resources').insert([
        {id: 1, projectID: 1, resourceID: 1},
        {id: 2, projectID: 1, resourceID: 2},
      ]);
};
