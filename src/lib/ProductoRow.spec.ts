import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/svelte'
import ProductoRow from './ProductoRow.svelte'
import { Producto } from './productos'

describe('el producto', () => {

  const producto = new Producto('Manguera Remix', 1200, 4, 2, 'manguera.png')

  beforeEach(() => {
    vi.useFakeTimers()
    // seteamos una fecha controlada como la fecha de hoy
    const date = new Date(2024, 1, 20, 0, 0, 0)
    vi.setSystemTime(date)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

	it('muestra el elemento seleccionado con una clase especial', () => {
    render(ProductoRow, { producto, seleccionado: true })
    expect(screen.getByTestId('row').classList).toContain('elegido')
  })

  it('muestra el elemento no seleccionado con una clase normal', () => {
    render(ProductoRow, { producto, seleccionado: false })
    expect(screen.getByTestId('row').classList).toContain('normal')
  })

  it('muestra la fecha de entrega en base a la cantidad de días', () => {
    render(ProductoRow, { producto, seleccionado: false })
    expect(screen.getByTestId('fecha-entrega').innerHTML).toBe('Llega el 22/02/2024')
  })

  it('muestra el valor del producto con el formateo de currency', () => {
    render(ProductoRow, { producto, seleccionado: false })
    expect(screen.getByTestId('precio').innerHTML).toBe('$&nbsp;1.200,00')
  })

})
