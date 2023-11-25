import Button from './Button'
import { Meta, StoryFn } from '@storybook/react'

export default {
	title: 'Home/Atoms/Button',
	component: Button
} as Meta<typeof Button>

const component: StoryFn<typeof Button> = (args) => <Button {...args} />

export const button = component.bind({})
button.args = {
	text: 'My first Prop'
}
