import About from "@about/views/About.vue"
import { shallowMount } from "@vue/test-utils"


decsribe("About.vue", () => {
    test('renders inner text', () => {
        const wrapper = shallowMount(About);
        
        expect(wrapper.text()).toContain('about');
    })
});