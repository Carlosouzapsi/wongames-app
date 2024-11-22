import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the page heading', () => {
    // Renderiza o component
    const { container } = render(<Main />)
    // Busca o elemento e verifica a existência dele
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the colors correctly', () => {
    // Renderiza o component
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })

    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
