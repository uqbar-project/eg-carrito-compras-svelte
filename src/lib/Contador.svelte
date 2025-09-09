<script lang="ts">
  import './contador.css'

  type ContadorProps = {
    valor: number,
    desde?: number,
    hasta?: number,
  }

  let { valor = $bindable(0), desde = undefined, hasta = undefined }: ContadorProps 
    = $props()

  const restar = () => {
    valor--
    if (desde && hasta && valor < desde) {
      valor = hasta
    }
  }
  const sumar = () => {
    valor++
    if (desde && hasta && valor > hasta) {
      valor = desde
    }
  }
</script>

<div class="box">
  <button data-testid="restar" class="secondary" onclick={restar}>-</button>
  <span data-testid="valor">{valor}</span>
  <button data-testid="sumar" class="primary" onclick={sumar}>+</button>
</div>
