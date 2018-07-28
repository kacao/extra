const extra = require('../lib/extra');
const should = require('should');

describe('extra', () => {
  it('should validate options successfully', () => {
    let def = {
      climate: {
        automatic: true,
        data: {
          start: "10:00:00",
          end: "2:45:00",
          heat: 70,
          heat_target: 70,
          cool_target: 75,
          cool: 77
        }
      },
      name: 'test'
    }

    let options = {
      climate: {
        data: {
          heat: 75
        }
      },
      name: 'options'
    }

    let val = {
      climate: {
        automatic: true,
        data: {
          start: "10:00:00",
          end: "2:45:00",
          heat: 75,
          heat_target: 70,
          cool_target: 75,
          cool: 77
        }
      },
      name: 'options'
    }

    let o = extra.validateOptions(def, options);
    o.should.be.eql(val);
  });
});
