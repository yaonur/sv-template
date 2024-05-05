<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";
    import { cva, type VariantProps } from "class-variance-authority";
    // @ts-ignore
    let {  children, ...props } = $props<HTMLButtonAttributes>();
    import {cn} from "$utils/cn"

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

    interface $$Props extends HTMLButtonAttributes, VariantProps<typeof button> {}
    
    let intent: $$Props["intent"] = props.intent as  $$Props["intent"] || "primary" ;
    let size: $$Props["size"]=props.size as $$Props["size"] || "medium";
    
    console.log("$$props", props);
</script>

<!-- <button {...$$props} class={cn(button({ intent, size, class: $$props.class }))} on:click={handleClick}>
    <slot />
</button> -->
<button {...props} class={cn(button({ intent, size, class: props.class as string}))}>
    {@render children()}
</button>

<style>

</style>