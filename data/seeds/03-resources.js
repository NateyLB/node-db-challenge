
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resourceName:"Computer", description:"A moderately powerful computer for writing programs"},
        {id: 2, resourceName:"StackOverflow", description:"A place to ask development questions"},
      ]);
};
