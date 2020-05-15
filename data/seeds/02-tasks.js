
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, projectID: 1, description:"Reearch the best technologies for the job", notes:"Look into a framework that allows you to write for mobile and desktop"},
      ]);
};
