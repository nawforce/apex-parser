import {
    SoslLiteralAltContext,
    SoslLiteralContext
} from "../ApexParser";
import { createParser } from "./SyntaxErrorCounter";

test('testBasicQuery', () => {
    const [parser, errorCounter] = createParser("test.sosl", "[Find 'something' RETURNING Account]")

    const context = parser.soslLiteral()

    expect(context).toBeInstanceOf(SoslLiteralContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('testEmbeddedQuote', () => {
    const [parser, errorCounter] = createParser("test.sosl", "[Find 'some\\'thing' RETURNING Account]")

    const context = parser.soslLiteral()

    expect(context).toBeInstanceOf(SoslLiteralContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('testBracesFail', () => {
    const [parser, errorCounter] = createParser("test.sosl", "[Find {something} RETURNING Account]")

    const context = parser.soslLiteral()

    expect(context).toBeInstanceOf(SoslLiteralContext)
    expect(errorCounter.getNumErrors()).toEqual(1)
})

test('testBracesOnAltFormat', () => {
    const [parser, errorCounter] = createParser("test.sosl", "[Find {something} RETURNING Account]")

    const context = parser.soslLiteralAlt()

    expect(context).toBeInstanceOf(SoslLiteralAltContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('testQuotesFailOnAltFormat', () => {
    const [parser, errorCounter] = createParser("test.sosl", "[Find 'something' RETURNING Account]")

    const context = parser.soslLiteralAlt()

    expect(context).toBeInstanceOf(SoslLiteralAltContext)
    expect(errorCounter.getNumErrors()).toEqual(1)
})
