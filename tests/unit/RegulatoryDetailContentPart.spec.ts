import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, mount } from '@vue/test-utils';
import RegulatoryDetailContentPart from '@/components/RegulatoryDetailContentPart.vue';

const TWO_ELEMENTS = [
  {
    "type": "TEXT",
    "text": "Element 1"
  },
  {
    "type": "TEXT",
    "text": "Element 2"
  }
];

describe('Test Regulatory Detail Content Part', () => {
  it('renders no entry with empty contentElements', () => {
    const wrapper = shallowMount(RegulatoryDetailContentPart, {
      propsData: { contentElements: [] },
    });
    
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.element.innerHTML).toBe('');
  });

  it('renders two text elements', () => {
    const wrapper = mount(RegulatoryDetailContentPart, {
      propsData: { contentElements: TWO_ELEMENTS },
      
    });
    
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
