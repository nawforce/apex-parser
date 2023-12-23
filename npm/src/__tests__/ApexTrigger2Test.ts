import {TriggerUnit2Context} from "../ApexParser";
import { createParser } from "./SyntaxErrorCounter";

test('Empty Trigger', () => {
    const [parser, errorCounter] = createParser("test.trigger", "trigger test on Account (before update, after update) {}")
    const context = parser.triggerUnit2()

    expect(context).toBeInstanceOf(TriggerUnit2Context)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('Trigger with statement', () => {
    const [parser, errorCounter] = createParser("test.trigger", "trigger test on Account (before update, after update) {System.debug('');}")
    const context = parser.triggerUnit2()

    expect(context).toBeInstanceOf(TriggerUnit2Context)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('Trigger with method', () => {
    const [parser, errorCounter] = createParser("test.trigger", "trigger test on Account (before update, after update) {public void func() {}}")
    const context = parser.triggerUnit2()

    expect(context).toBeInstanceOf(TriggerUnit2Context)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('Trigger with field', () => {
    const [parser, errorCounter] = createParser("test.trigger", "trigger test on Account (before update, after update) {String a;}")
    const context = parser.triggerUnit2()

    expect(context).toBeInstanceOf(TriggerUnit2Context)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('Trigger with interface', () => {
    const [parser, errorCounter] = createParser("test.trigger", "trigger test on Account (before update, after update) {interface Foo {}}")
    const context = parser.triggerUnit2()

    expect(context).toBeInstanceOf(TriggerUnit2Context)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('Trigger with class', () => {
    const [parser, errorCounter] = createParser("test.trigger", "trigger test on Account (before update, after update) {class Foo {}}")
    const context = parser.triggerUnit2()

    expect(context).toBeInstanceOf(TriggerUnit2Context)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('Trigger with enum', () => {
    const [parser, errorCounter] = createParser("test.trigger", "trigger test on Account (before update, after update) {enum Foo {}}")
    const context = parser.triggerUnit2()

    expect(context).toBeInstanceOf(TriggerUnit2Context)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('Trigger with property', () => {
    const [parser, errorCounter] = createParser("test.trigger", "trigger test on Account (before update, after update) { String a {get { return a; } set { a = value; }} }")
    const context = parser.triggerUnit2()

    expect(context).toBeInstanceOf(TriggerUnit2Context)
    expect(errorCounter.getNumErrors()).toEqual(0)
})