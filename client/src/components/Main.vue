<template>
	<div class="container">
		<div
			class="horizontal"
			@dragover.prevent.stop
			@dragenter.prevent.stop
			@dragleave.prevent.stop
			@drop.prevent.stop="drop"
			@click="$refs.file.click()"
		>
			<h2>Browse</h2>
			<input ref="file" class="file" type="file" />
		</div>
		<div class="vertical">
			<h2>ACTIVE APPLICATIONS</h2>
		</div>
		<div>
			<h2>CPU</h2>
		</div>
		<div>
			<h2>RAM</h2>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Main',
		methods: {
			drop(e) {
				console.log(e.dataTransfer.files);
			},
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.container {
		display: grid;
		height: 100vh;
		width: 100vw;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 50px;
		padding: 20px;
	}
	.container div {
		background: rgb(255, 255, 255);
		border-radius: 10px;
		background: #f5f5f5;
		box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 20px;
		border: 1px solid #c8c8c8;
		padding: 30px 10px;
	}
	.vertical {
		grid-row: 1 / -1;
		grid-column: 3 / 4;
	}
	.horizontal {
		grid-row: 1 / 2;
		grid-column: 1 / 3;
	}
	.file {
		display: none;
	}
</style>
