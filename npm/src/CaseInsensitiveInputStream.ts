/*
 [The "BSD licence"]
 Copyright (c) 2019 Kevin Jones
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
 3. The name of the author may not be used to endorse or promote products
    derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import { CharStream } from "antlr4ts";
import { Interval } from "antlr4ts/misc/Interval";

export class CaseInsensitiveInputStream implements CharStream {
  private src: CharStream;

  // userData is an untyped identifierfor the stream, for string input use CharStreams.fromString()
  constructor(src: CharStream) {
    this.src = src;
  }

  getText(interval: Interval): string {
    return this.src.getText(interval);
  }

  consume(): void {
    this.src.consume();
  }

  LA(i: number): number {
    return this.toLower(this.src.LA(i));
  }

  mark(): number {
    return this.src.mark();
  }

  release(marker: number): void {
    this.src.release(marker);
  }

  get index(): number {
    return this.src.index;
  }

  seek(index: number): void {
    return this.src.seek(index);
  }

  get size(): number {
    return this.src.size;
  }

  get sourceName(): string {
    return this.src.sourceName;
  }

  // We only need basic upper to lower conversions
  private toLower(c: number): number {
    if (c >= 65 && c <= 90) {
      return c + 32;
    } else {
      return c;
    }
  }
}
