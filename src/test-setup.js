import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
afterEach(() => { cleanup(); vi.restoreAllMocks(); });
window.matchMedia = vi.fn(() => ({ matches: true, addEventListener() {}, removeEventListener() {} }));
globalThis.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
HTMLDialogElement.prototype.showModal = function () { this.setAttribute('open', ''); };
HTMLDialogElement.prototype.close = function () { this.removeAttribute('open'); };
