<script lang="ts">
  import { format } from 'date-fns'
  import './producto.css'
  import { showCurrency } from './utils'

  let { producto, seleccionado, key } = $props()
  let claseSeleccion = $derived(seleccionado ? 'elegido' : 'normal')
</script>

<div data-testid={'row-' + key} class="container {claseSeleccion}">
  <div class="imagen">
    <img src="/{producto.imagen}" alt={producto.descripcion} />
  </div>
  <div class="info">
    <p class="principal">{producto.descripcion}</p>
    <p class="secundario" data-testid="fecha-entrega">
      Llega el {format(producto.fechaEntrega(), 'dd/MM/yyyy')}
    </p>
  </div>
  <div class="precio">
    <p class="precio" data-testid="precio">{showCurrency(producto.valor)}</p>
  </div>
</div>
