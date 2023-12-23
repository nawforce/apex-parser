package com.nawforce.apexparser;

import org.junit.jupiter.api.Test;

import java.util.Map;

import static com.nawforce.apexparser.SyntaxErrorCounter.createParser;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class ApexTrigger2Test {

  @Test
  void testEmptyTrigger() {
    Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("trigger test on Account (before update, after update) {}");
    ApexParser.TriggerUnit2Context context = parserAndCounter.getKey().triggerUnit2();
    assertNotNull(context);
    assertEquals(0, parserAndCounter.getValue().getNumErrors());
  }

  @Test
  void testTriggerWithStatement() {
    Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("trigger test on Account (before update, after update) {System.debug('');}");
    ApexParser.TriggerUnit2Context context = parserAndCounter.getKey().triggerUnit2();
    assertNotNull(context);
    assertEquals(0, parserAndCounter.getValue().getNumErrors());
  }

  @Test
  void testTriggerWithMethod() {
    Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("trigger test on Account (before update, after update) {public void func() {}}");
    ApexParser.TriggerUnit2Context context = parserAndCounter.getKey().triggerUnit2();
    assertNotNull(context);
    assertEquals(0, parserAndCounter.getValue().getNumErrors());
  }

  @Test
  void testTriggerWithField() {
    Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("trigger test on Account (before update, after update) {String a;}");
    ApexParser.TriggerUnit2Context context = parserAndCounter.getKey().triggerUnit2();
    assertNotNull(context);
    assertEquals(0, parserAndCounter.getValue().getNumErrors());
  }

  @Test
  void testTriggerWithInterface() {
    Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("trigger test on Account (before update, after update) {interface Foo {}}");
    ApexParser.TriggerUnit2Context context = parserAndCounter.getKey().triggerUnit2();
    assertNotNull(context);
    assertEquals(0, parserAndCounter.getValue().getNumErrors());
  }

  @Test
  void testTriggerWithClass() {
    Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("trigger test on Account (before update, after update) {class Foo {}}");
    ApexParser.TriggerUnit2Context context = parserAndCounter.getKey().triggerUnit2();
    assertNotNull(context);
    assertEquals(0, parserAndCounter.getValue().getNumErrors());
  }

  @Test
  void testTriggerWithEnum() {
    Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("trigger test on Account (before update, after update) {enum Foo {}}");
    ApexParser.TriggerUnit2Context context = parserAndCounter.getKey().triggerUnit2();
    assertNotNull(context);
    assertEquals(0, parserAndCounter.getValue().getNumErrors());
  }

  @Test
  void testTriggerWithProperty() {
    Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("trigger test on Account (before update, after update) { String a {get { return a; } set { a = value; }} }");
    ApexParser.TriggerUnit2Context context = parserAndCounter.getKey().triggerUnit2();
    assertNotNull(context);
    assertEquals(0, parserAndCounter.getValue().getNumErrors());
  }

}
