import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/svelte'
import Carrito from './+page.svelte'

describe('el carrito de compras', () => {

  it('inicialmente muestra el primer producto seleccionado', () => {
    render(Carrito)
    expect(screen.getByTestId('row-1').classList).toContain('elegido')
  })

  it('si se presiona el botón +, avanza al segundo elemento como elegido', async () => {
    render(Carrito)
    const sumarList = await screen.findAllByTestId('sumar')
    expect(sumarList.length).toBeGreaterThan(0)
    await sumarList[0].click()
    expect(screen.getByTestId('row-2').classList).toContain('elegido')
  })

  it('si se presiona el botón -, va al último elemento como elegido', async () => {
    render(Carrito)
    const restarList = await screen.findAllByTestId('restar')
    expect(restarList.length).toBeGreaterThan(0)
    await restarList[0].click()
    expect(screen.getByTestId('row-4').classList).toContain('elegido')
  })

})