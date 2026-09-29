import assert from 'node:assert/strict';
import { TraceMap, traceSegment } from '../src/trace-mapping';

describe('traceSegment line bounds', () => {
  it('returns null for a negative line without changing valid line lookup', () => {
    const map = new TraceMap({ version: 3, sources: ['input.js'], names: [], mappings: 'AAAA' });
    assert.equal(traceSegment(map, -1, 0), null);
    assert.equal(traceSegment(map, 1, 0), null);
    assert.deepEqual(traceSegment(map, 0, 0), [0, 0, 0, 0]);
  });
});
