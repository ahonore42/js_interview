const parseInput = require('../')

let testCases = {
  1: {
    input:'fr@g',
    char:'@',
    answer:'frg'
  },
  2 : {
    input: 'answer?',
    char:'?',
    answer:'answer'
  },
  3 : {
    input: 'd#y',
    char: '#',
    answer:'dy'
  },
  4 : {
    input: '',
    char:'&',
    answer:''
  },
  5 : {
    input: 'qu3stion',
    char:'',
    answer:''
  },
  6: {
    input:5, 
    char:'$', 
    answer:''
    },
  7 : {
    input:'beach3',
    char:3,
    answer:''
  }
}

describe('parseInput should clean the provided input', ()=> {
  test('should remove @ from the input',()=> {
    const val = parseInput(testCases[1].input, testCases[1].char)
    expect(val).toBe(testCases[1].answer)
  })
  test('should remove ? from the input', ()=> {
    const val = parseInput(testCases[2].input, testCases[2].char)
    expect(val).toBe(testCases[2].answer)
  })
  test('should remove # from the input', ()=> {
    const val = parseInput(testCases[3].input, testCases[3].char)
    expect(val).toBe(testCases[3].answer)
  })
  test('should check for empty input', ()=> {
    const val = parseInput(testCases[4].input, testCases[4].char)
    expect(val).toBe(testCases[4].answer)
  })
    test('should check for empty char', ()=> {
    const val = parseInput(testCases[5].input, testCases[5].char)
    expect(val).toBe(testCases[5].answer)
  })
    test('should check if input is number', ()=> {
    const val = parseInput(testCases[6].input, testCases[6].char)
    expect(val).toBe(testCases[6].answer)
  })
    test('should check if char is number', ()=> {
    const val = parseInput(testCases[7].input, testCases[7].char)
    expect(val).toBe(testCases[7].answer)
  })
})