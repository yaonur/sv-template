<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import StoryTest from './StoryTest.svelte';
  </script>
  
  <Meta title="StoryTest" component={StoryTest}/>
  
  <Template let:args>
	<StoryTest {...args}/>
  </Template>
  
  <Story name="Slot" args={{primary: true}}>Send with slot</Story>	
  
  <Story name="Secondary" args={{primary: false}}/>