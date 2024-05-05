import {writable} from "svelte/store"
import {type ActiveId, type AccordionOptions, type CollapseContext, type ActiveIdContext} from "./types"
import { getContext, setContext } from "svelte"

const activeComponentId = writable<ActiveId>(null)

export function setAccordionOptions({collapse}:AccordionOptions){
	setContext<CollapseContext>('collapse', collapse)
	setContext<ActiveIdContext>('active', activeComponentId)
}

export function getAccordionOptions() {
	const collapse = getContext<CollapseContext>('collapse')
	const activeComponentId = getContext<ActiveIdContext>('active')
	return {collapse, activeComponentId}
}

