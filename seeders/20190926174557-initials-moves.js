'use strict'

module.exports = {
	up   : async (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    
      Example:
    */
		await queryInterface.bulkDelete('Moves')
		return queryInterface.bulkInsert(
			'Moves',
			[
				{
					name : 'Rock',
					size : 1
				},
				{
					name : 'Scissors',
					size : 2
				},
				{
					name : 'Paper',
					size : 3
				}
			],
			{}
		)
	},

	down : (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	}
}
