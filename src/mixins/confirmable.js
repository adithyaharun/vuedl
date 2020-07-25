export default {
  name: 'Confirmable',

  props: {
    type: {
      type: String
    },
    text: {
      type: [String, Function],
      required: true
    },
    title: {
      type: String
    },
    actions: {
      type: [Array, Object, Function]
    }
  }
}
