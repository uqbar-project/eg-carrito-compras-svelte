<script lang="ts">
  import './contador.css'

  let { valorInicial = 0, desde = undefined, hasta = undefined } = $props()
	let count = $state(valorInicial)

	const restar = () => {
    count--
    count = !!desde && count < desde ? hasta : count
  }
	const sumar = () => {
    count++
    count = !!hasta && count > hasta ? desde : count
  }
</script>

<div class='box'>
  <button class='secondary' onclick={restar}>-</button>
  <span>{count}</span>
  <button class='primary' onclick={sumar}>+</button>
</div>
