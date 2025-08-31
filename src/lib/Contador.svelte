<script lang="ts">
  import './contador.css'

  type ContadorProps = { valor?: number; desde?: number; hasta?: number }

  let { valor = $bindable(0), desde, hasta }: ContadorProps = $props()

  const restar = () => {
    valor--
    valor = !!desde && !!hasta && valor < desde ? hasta : valor
  }
  const sumar = () => {
    valor++
    valor = !!hasta && !!desde && valor > hasta ? desde : valor
  }
</script>

<div class="box">
  <button data-testid="restar" class="secondary" onclick={restar}>-</button>
  <span data-testid="valor">{valor}</span>
  <button data-testid="sumar" class="primary" onclick={sumar}>+</button>
</div>

