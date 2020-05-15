
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, projectName:"Cute Dog App", description:"An app that displays random cute dog picture on mobile and desktop"}
      ]);
};
