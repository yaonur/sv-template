<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import Progress from './Progress.svelte';
</script>

<Meta title="ui/progress" component={Progress}/>

<Template let:args>
    <Progress {...args}>   </Progress>
</Template>

<Story name="progress main" args={{value: 50}}></Story>
