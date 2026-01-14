<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { useGltf, useGltfAnimations } from '@threlte/extras';
	import {
		AlwaysStencilFunc,
		ReplaceStencilOp,
		NotEqualStencilFunc,
		Mesh,
		DirectionalLight
	} from 'three';

	const fov = 40;
	const textWidth = 8.01;
	const textPadding = 0.4;
	const endCameraOffset = [-0.01, 0, 0.1];

	let { scrollY, scrollRange } = $props();
	let innerWidth = $state(0);
	let innerHeight = $state(0);
	let horizontalFov = $derived(fov * (innerWidth / innerHeight));

	let angle = 0.0;
	const speed = 5.0;
	useTask((delta) => {
		angle += delta * speed;
		lightX = Math.cos(angle) * 2.0;
		lightY = Math.sin(angle) * 2.0;
	});

	let lightX = $state(0);
	let lightY = $state(0);

	type Position = [x: number, y: number, z: number];
	let endCameraPosition: Position = [0, 0, 0];

	let cameraPosition: Position = $derived.by(() => {
		const startZ = (textWidth + textPadding) / 2 / Math.sin((horizontalFov / 2) * (Math.PI / 180));
		const progress = Math.max(0, Math.min(1, scrollY / scrollRange));
		return [
			endCameraPosition[0] * progress,
			endCameraPosition[1] * progress,
			startZ + (endCameraPosition[2] - startZ) * progress
		];
	});

	const gltf = useGltf('/intro_scene.glb');
	const { actions } = useGltfAnimations(gltf);

	$effect(() => {
		if ($gltf) {
			$gltf.scene.traverse((child) => {
				if (child instanceof Mesh) {
					if (child.name === 'Mask') {
						child.renderOrder = 1;
						child.material.colorWrite = false;
						child.material.stencilWrite = true;
						child.material.stencilRef = 1;
						child.material.stencilFunc = AlwaysStencilFunc;
						child.material.stencilZPass = ReplaceStencilOp;
						endCameraPosition = [
							child.position.x + endCameraOffset[0],
							child.position.y + endCameraOffset[1],
							child.position.z + endCameraOffset[2]
						];
					} else {
						if (child.name === 'Text') {
							child.renderOrder = 0;
						} else {
							child.renderOrder = 2;
						}
						child.material.stencilWrite = true;
						child.material.stencilRef = 1;
						child.material.stencilFunc = NotEqualStencilFunc;
					}
				}
			});
		}
	});
	$effect(() => {
		for (const name in $actions) {
			$actions[name]?.play();
		}
	});
</script>

<T.PerspectiveCamera position={cameraPosition} {fov} makeDefault></T.PerspectiveCamera>
<T.AmbientLight intensity={10} />
<T.DirectionalLight position={[0, 5, 10]} intensity={10} />
{#if $gltf}
	<T is={$gltf.scene} />
{/if}
<svelte:window bind:innerWidth bind:innerHeight />
