describe('React Slingshot UI', function() {
	beforeEach(function(){
		cy.visit('/')
	})

	it('Validar titulo da tela home', function() {
		cy.contains('React Slingshot').should('to.have.length',1)
	})

	it(' Validar titulo da tela Demo APP', function () {
		cy.contains('Demo App').click()
		cy.contains('Fuel Savings Analysis').should('to.have.length',1)
	})

	it('Preencher Analise ecônomia de combustivel', function () {
		cy.contains('Demo App').click()
		cy.get('[name=newMpg]').type('Duster 2019')
		cy.get('[name=tradeMpg]').type('80.000,00')
		cy.get('[name=newPpg]').type('65.000,00')
		cy.get('[name=tradePpg]').type('65.000,00')
		cy.get('[name=milesDriven]').type('35')
		cy.get('[name=milesDrivenTimeframe]').select('Month')
		cy.contains('Save').click()
	})
});