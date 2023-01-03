import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import SongItem from "@/components/SongItem.vue";
import { describe } from "vitest";
import { RouterLink } from "vue-router";

describe("Router", () => {
  test("renders router link", () => {
    const song = {
      docId: "abc",
    };

    const wrapper = shallowMount(SongItem, {
      propsData: { song },
      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });

    expect(wrapper.findAllComponents(RouterLinkStub).props().to).toEqual({
      name: "song",
      params: { id: song.docID },
    });
  });
});
