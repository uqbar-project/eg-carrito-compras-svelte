<script lang='ts'>
  import './contador.css'

  let { valor = $bindable(0), desde = undefined, hasta = undefined } = $props()

	const restar = () => {
    valor--
    valor = !!desde && valor < desde ? hasta : valor
  }
	const sumar = () => {
    valor++
    valor = !!hasta && valor > hasta ? desde : valor
  }
</script>

<div class='box'>
  <button data-testid="restar" class='secondary' onclick={restar}>-</button>
  <span data-testid="valor">{valor}</span>
  <button data-testid="sumar" class='primary' onclick={sumar}>+</button>
</div>
