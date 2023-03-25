import App from '../../App.vue'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(App)
  })
})

// cypress vite version failing? https://github.com/cypress-io/cypress/issues/26138 