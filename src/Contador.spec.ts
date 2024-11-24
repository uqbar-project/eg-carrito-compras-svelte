import Contador from '$lib/Contador.svelte'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/svelte'

describe('el contador', () => {

	const getValor = (): number => {
		const valor = screen.getByTestId('valor').innerHTML
		return +valor
	}

	describe('inicial', () => {
		it('inicialmente arranca en 0 si no le pasamos valores', () => {
			render(Contador)
			expect(getValor()).toBe(0)
		})
	
		it('inicialmente arranca en el valor que le pasamos', () => {
			render(Contador, { valor: 5 } )
			expect(getValor()).toBe(5)
		})
	})

	describe('sin rango desde/hasta', () => {
		it('suma indefinidamente', async () => {
			render(Contador, { valor: 5 } )
			await screen.getByTestId('sumar').click()
			await screen.getByTestId('sumar').click()
			await screen.getByTestId('sumar').click()
			await screen.getByTestId('sumar').click()
			expect(getValor()).toBe(9)
		})

		it('resta indefinidamente', async () => {
			render(Contador, { valor: 3 } )
			await screen.getByTestId('restar').click()
			await screen.getByTestId('restar').click()
			await screen.getByTestId('restar').click()
			await screen.getByTestId('restar').click()
			expect(getValor()).toBe(-1)
		})
	})

	describe('con rango desde/hasta', () => {
		it('suma hasta que llega al límite y vuelve a empezar', async () => {
			render(Contador, { valor: 3, desde: 1, hasta: 4 } )
			await screen.getByTestId('sumar').click()
			await screen.getByTestId('sumar').click()
			await screen.getByTestId('sumar').click()
			expect(getValor()).toBe(2)
		})

		it('resta indefinidamente', async () => {
			render(Contador, { valor: 2, desde: 1, hasta: 4 } )
			await screen.getByTestId('restar').click()
			await screen.getByTestId('restar').click()
			await screen.getByTestId('restar').click()
			expect(getValor()).toBe(3)
		})
	})

})
