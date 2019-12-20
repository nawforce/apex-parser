import ApexParserFactory from '../ApexParserFactory'

test('Parse test', () => {
    new ApexParserFactory().parse("public class Hello {}")
})