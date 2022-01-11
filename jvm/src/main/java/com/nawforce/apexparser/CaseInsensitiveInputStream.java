/*
 [The "BSD licence"]
 Copyright (c) 2017 Kevin Jones
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
package com.nawforce.apexparser;

import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.IntStream;
import org.antlr.v4.runtime.misc.Interval;

import java.io.IOException;
import java.io.InputStream;
import java.io.Reader;

/**
 * ANTLR4 stream handler that allows use of case insensitive handling.
 */
@SuppressWarnings({"unused"})
public class CaseInsensitiveInputStream implements CharStream {

    private CharStream src;

    public CaseInsensitiveInputStream(CharStream src) {
        this.src = src;
    }

    @Deprecated
    public CaseInsensitiveInputStream(InputStream r) throws IOException {
        this.src = CharStreams.fromStream(r);
    }

    @Deprecated
    public CaseInsensitiveInputStream(Reader r) throws IOException {
        this.src = CharStreams.fromReader(r);
    }

    @Deprecated
    public CaseInsensitiveInputStream(Reader r, Integer initialSize, Integer readChunkSize) throws IOException {
        this.src = CharStreams.fromReader(r);
    }

    @Override
    public String getText(Interval interval) {
        return src.getText(interval);
    }

    @Override
    public void consume() {
        src.consume();
    }

    @Override
    public String getSourceName() {
        return src.getSourceName();
    }

    @Override
    public int index() {
        return src.index();
    }

    @Override
    public int LA(int i) {
        return Character.toLowerCase(src.LA(i));
    }

    @Override
    public int mark() {
        return src.mark();
    }

    @Override
    public void release(int marker) {
        src.release(marker);
    }

    @Override
    public void seek(int index) {
        src.seek(index);
    }

    @Override
    public int size() {
        return src.size();
    }

    public void dump() {
        int i = 0;
        int value;
        do {
            value = LA(i);
            i += 1;
            System.out.print((char)value);
        } while (value != IntStream.EOF);
    }
}
