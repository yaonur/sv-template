<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";
    import { cva, type VariantProps } from "class-variance-authority";
    // @ts-ignore
    let {  children,...props }  = $props<ButtonProps>();
    import {cn} from "$utils/cn"
	import type { Snippet } from "svelte";

    const button = cva("button", {
        variants: {
            intent: {
                primary: "bg-primary",
                secondary: "bg-secondary",
            },
            size: {
                small: "w-20 h-10",
                medium: "w-28 h-14 ",
            },
        },
        compoundVariants: [
            { intent: "primary", size: "medium", class: "primaryMedium" },
        ],
    });

    interface ButtonProps extends HTMLButtonAttributes, VariantProps<typeof button> {}
    
    // let intent: $$Props["intent"] = props.intent as  $$Props["intent"] || "primary" ;
    // let size: $$Props["size"]=props.size as $$Props["size"] || "medium";
</script>

<button {...props} class={cn(button({ intent:props.intent || "primary", size:props.size || "medium", class: props.class as string}))}>
    {@render children()}
</button>

<style>

</style>