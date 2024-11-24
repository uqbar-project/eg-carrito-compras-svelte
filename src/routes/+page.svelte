<script>
  import './styles.css'
	import Contador from '$lib/Contador.svelte'
	import ProductoRow from '$lib/ProductoRow.svelte'
  import { productos } from '$lib/productos'
  let itemSeleccionado = $state(1)
</script>

<div class='title'>
  <h2>
    Carrito de compras
  </h2>
</div>

{#each productos as producto, i}
  <ProductoRow producto={producto} seleccionado={i + 1 === itemSeleccionado} key={i + 1}/>
{/each}

<Contador bind:valor={itemSeleccionado} desde={1} hasta={productos.length}></Contador>
<hr/>
<div class='title'>
  <h2>
    Contador libre
  </h2>
</div>
<Contador/>
