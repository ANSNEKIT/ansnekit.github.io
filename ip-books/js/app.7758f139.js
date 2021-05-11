(function (t) { function e(e) { for (var r, i, c = e[0], s = e[1], u = e[2], b = 0, d = []; b < c.length; b++)i = c[b], Object.prototype.hasOwnProperty.call(a, i) && a[i] && d.push(a[i][0]), a[i] = 0; for (r in s)Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]); l && l(e); while (d.length)d.shift()(); return n.push.apply(n, u || []), o(); } function o() { for (var t, e = 0; e < n.length; e++) { for (var o = n[e], r = !0, c = 1; c < o.length; c++) { const s = o[c]; a[s] !== 0 && (r = !1); }r && (n.splice(e--, 1), t = i(i.s = o[0])); } return t; } const r = {}; var a = { app: 0 }; var n = []; function i(e) { if (r[e]) return r[e].exports; const o = r[e] = { i: e, l: !1, exports: {} }; return t[e].call(o.exports, o, o.exports, i), o.l = !0, o.exports; }i.m = t, i.c = r, i.d = function (t, e, o) { i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o }); }, i.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }); }, i.t = function (t, e) { if (1 & e && (t = i(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; const o = Object.create(null); if (i.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') for (const r in t)i.d(o, r, ((e) => t[e]).bind(null, r)); return o; }, i.n = function (t) { const e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return i.d(e, 'a', e), e; }, i.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, i.p = '/'; let c = window.webpackJsonp = window.webpackJsonp || []; const s = c.push.bind(c); c.push = e, c = c.slice(); for (let u = 0; u < c.length; u++)e(c[u]); var l = s; n.push([0, 'chunk-vendors']), o(); }({
  0(t, e, o) { t.exports = o('56d7'); },
  '07bb': function (t, e, o) {},
  '094b': function (t, e, o) {},
  '0d92': function (t, e, o) {
    const r = o('2d11'); const a = o.n(r); o.d(e, 'default', (() => a.a));
  },
  '1bce': function (t, e, o) {
    o('32ab');
  },
  '1d63': function (t, e, o) {
    o('61de');
  },
  2046(t, e, o) {
    o('07bb');
  },
  2315(t, e, o) {
    o('35b6');
  },
  '2c8d': function (t, e, o) {
    o('511e');
  },
  '2d11': function (t, e) {},
  '32ab': function (t, e, o) {},
  '35b6': function (t, e, o) {},
  '3a0b': function (t, e, o) {
    const r = o('c721'); const a = o('0d92'); o('1d63'); a.default.render = r.a, a.default.__scopeId = 'data-v-43ef5c1c', e.default = a.default;
  },
  4940(t, e, o) {
    o('094b');
  },
  '511e': function (t, e, o) {},
  '56d7': function (t, e, o) {
    o.r(e); o('e260'), o('e6cf'), o('cca6'), o('a79d'), o('e792'), o('0cdd'), o('ab8b'); const r = o('7a23'); const a = { class: 'container with-nav' }; function n(t, e, o, n, i, c) { const s = Object(r.w)('the-navbar'); const u = Object(r.w)('router-view'); return Object(r.p)(), Object(r.d)(r.a, null, [Object(r.g)(s), Object(r.g)('div', a, [Object(r.g)(u)])], 64); }o('d81d'); const i = o('3a0b'); const c = [{
      id: 1, name: 'Евгений Онегин', authors: 'Пушкин А.С.', publisher: 'ООО "Счастливый мир"', year: '2018', rating: 543, isChangeRating: !0, favourite: !1,
    }, {
      id: 2, name: 'Война и мир', authors: 'Толстой Л. Н.', publisher: 'ООО &quote;Москва&quote;', year: '2020', rating: 444, isChangeRating: !0, favourite: !1,
    }, {
      id: 3, name: 'Война машин', authors: 'Далин А. Б.', publisher: 'Ромашка', year: '2005', rating: 28, isChangeRating: !0, favourite: !1,
    }, {
      id: 4, name: 'Интересная книга', authors: 'Баширов А. А., Петров Б. Б.', publisher: 'Ромашка', year: '2008', rating: 59, isChangeRating: !0, favourite: !1,
    }, {
      id: 5, name: 'Интересная книга', authors: 'Баширов А. А., Петров Б. Б.', publisher: 'Ромашка', year: '2000', rating: 135, isChangeRating: !0, favourite: !1,
    }, {
      id: 6, name: 'Приключение', authors: 'Абрикосов А. А', publisher: 'Ромашка', year: '2000', rating: -3, isChangeRating: !0, favourite: !1,
    }]; const s = c.map(((t) => JSON.stringify(t))); const u = s; const l = u.map(((t) => JSON.parse(t))); const b = { components: { TheNavbar: i.default }, provide() { return { favoriteBooks: [], dataBooks: l }; } }; b.render = n; const d = b; const f = o('6c02'); const p = Object(r.F)('data-v-641454f7'); Object(r.s)('data-v-641454f7'); const v = { class: 'home' }; const h = { class: 'card' }; const g = Object(r.g)('h1', { class: 'text-center my-5' }, ' Добро пожаловать в сервис поиска электронных книг! ', -1); const O = Object(r.g)('p', { class: 'mb-5' }, ' Здесь вы можете найти книги разных изданий, авторов. На данной странице реализована фильтрация по разным категориям. Сортировать можно по алвафиту, дате выхода, рейтингу. ', -1); Object(r.q)(); const j = p(((t, e, o, a, n, i) => {
      const c = Object(r.w)('app-search'); const s = Object(r.w)('app-filters'); const u = Object(r.w)('app-sort'); const l = Object(r.w)('empty-card'); const b = Object(r.w)('app-books'); return Object(r.p)(), Object(r.d)('section', v, [Object(r.g)('div', h, [g, O, Object(r.g)(c, { onSearch: i.searchBooks }, null, 8, ['onSearch']), Object(r.g)(s, { onFilters: i.dispatchFilteredBooks }, null, 8, ['onFilters']), Object(r.g)(u, {
        onSortName: i.sortByName, onSortRating: i.sortByRating, onSortYear: i.sortByYear, onClearSort: i.clearSort,
      }, null, 8, ['onSortName', 'onSortRating', 'onSortYear', 'onClearSort'])]), n.filteredBooks.length ? (Object(r.p)(!0), Object(r.d)(r.a, { key: 1 }, Object(r.v)(i.calcSort, ((t, e) => (Object(r.p)(), Object(r.d)(b, {
        key: t.id, book: t, identity: e, isChangeRating: t.isChangeRating, onAddFavourite: i.dispatchFavorite, onUpCount: i.upCount, onDownCount: i.downCount,
      }, null, 8, ['book', 'identity', 'isChangeRating', 'onAddFavourite', 'onUpCount', 'onDownCount'])))), 128)) : (Object(r.p)(), Object(r.d)(l, { key: 0, title: 'Список книг' }))]);
    })); const m = o('2909'); const y = (o('a434'), o('159b'), o('4de4'), o('caad'), o('2532'), o('b0c0'), Object(r.F)('data-v-1aef832a')); Object(r.s)('data-v-1aef832a'); const k = { class: 'card' }; const B = { class: 'book' }; const w = { class: 'book-info' }; const S = { class: 'd-flex mb-3' }; const C = { class: 'book-name' }; const _ = { class: 'book-author' }; const F = Object(r.f)(' Автор: '); const R = { class: 'book-publisher' }; const x = Object(r.f)(' Издательство: '); const L = { class: 'book-date' }; const N = Object(r.f)(' Дата выхода: '); const I = { class: 'book-rating' }; const A = Object(r.g)('h5', { class: 'text-center' }, 'Рейтинг:', -1); Object(r.q)(); const z = y(((t, e, o, a, n, i) => {
      const c = Object(r.w)('favourite-filled'); const s = Object(r.w)('favourite-border'); return Object(r.p)(), Object(r.d)('section', k, [Object(r.g)('div', B, [Object(r.g)('div', w, [Object(r.g)('div', S, [Object(r.g)('h3', C, [Object(r.g)('strong', null, Object(r.y)(o.book.name), 1)]), Object(r.g)('button', {
        onClick: e[1] || (e[1] = function () { return i.toggleFavouriteIcon && i.toggleFavouriteIcon.apply(i, arguments); }), id: 'favorite-btn', type: 'button', class: 'btn',
      }, [n.isLocalFavourite ? (Object(r.p)(), Object(r.d)(c, { key: 0 })) : (Object(r.p)(), Object(r.d)(s, { key: 1 }))])]), Object(r.g)('p', _, [F, Object(r.g)('strong', null, Object(r.y)(o.book.authors), 1)]), Object(r.g)('p', R, [x, Object(r.g)('strong', null, Object(r.y)(o.book.publisher), 1)]), Object(r.g)('p', L, [N, Object(r.g)('time', null, [Object(r.g)('strong', null, Object(r.y)(o.book.year), 1)])])]), Object(r.g)('div', I, [A, Object(r.g)('h2', { class: ['text-center', { 'rating-green': n.localRating > 0, 'rating-red': n.localRating < 0 }] }, Object(r.y)(n.localRating), 3), n.isActiveButton ? (Object(r.p)(), Object(r.d)('button', {
        key: 0, onClick: e[2] || (e[2] = function () { return i.upCount && i.upCount.apply(i, arguments); }), type: 'button', class: 'button warning',
      }, '+')) : Object(r.e)('', !0), n.isActiveButton ? (Object(r.p)(), Object(r.d)('button', {
        key: 1, onClick: e[3] || (e[3] = function () { return i.downCount && i.downCount.apply(i, arguments); }), type: 'button', class: 'button warning',
      }, '-')) : Object(r.e)('', !0)])])]);
    })); const J = (o('a9e3'), Object(r.F)('data-v-4dbe99b0')); Object(r.s)('data-v-4dbe99b0'); const $ = {
      width: '25', height: '25', 'aria-hidden': 'true', focusable: 'false', 'data-prefix': 'far', 'data-icon': 'star', class: 'svg-inline--fa fa-star fa-w-18', role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 576 512',
    }; const q = Object(r.g)('path', { fill: 'currentColor', d: 'M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z' }, null, -1); Object(r.q)(); const D = J(((t, e) => (Object(r.p)(), Object(r.d)('svg', $, [q])))); o('2c8d'); const U = {}; U.render = D, U.__scopeId = 'data-v-4dbe99b0'; const E = U; const M = Object(r.F)('data-v-5f19a0ac'); Object(r.s)('data-v-5f19a0ac'); const P = {
      width: '25', height: '25', 'aria-hidden': 'true', focusable: 'false', 'data-prefix': 'fas', 'data-icon': 'star', class: 'svg-inline--fa fa-star fa-w-18', role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 576 512',
    }; const V = Object(r.g)('path', { fill: 'currentColor', d: 'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z' }, null, -1); Object(r.q)(); const Y = M(((t, e) => (Object(r.p)(), Object(r.d)('svg', P, [V])))); o('2046'); const T = {}; T.render = Y, T.__scopeId = 'data-v-5f19a0ac'; const G = T; const H = {
      components: { FavouriteBorder: E, FavouriteFilled: G },
      name: 'appBooks',
      inject: ['dataBooks', 'favoriteBooks'],
      props: {
        id: Number, book: Object, isChangeRating: Boolean, favourite: Boolean, identity: Number,
      },
      emits: { 'add-favourite': function (t) { return typeof t === 'number'; }, 'up-count': function (t) { return typeof t === 'number'; }, 'down-count': function (t) { return typeof t === 'number'; } },
      data() { return { isLocalFavourite: this.book.favourite, isActiveButton: this.isChangeRating, localRating: this.book.rating }; },
      methods: { toggleFavouriteIcon() { this.isLocalFavourite = !this.isLocalFavourite, this.$emit('add-favourite', this.identity); }, upCount() { this.localRating += 1, this.isActiveButton = !this.isActiveButton, this.$emit('up-count', this.identity); }, downCount() { this.localRating -= 1, this.isActiveButton = !this.isActiveButton, this.$emit('down-count', this.identity); } },
    }; o('79ca'); H.render = z, H.__scopeId = 'data-v-1aef832a'; const K = H; const Q = { class: 'card' }; const W = { class: 'text-center mb-3' }; const X = Object(r.g)('p', { class: 'text-center' }, 'Здесь пока ничего нет', -1); function Z(t, e, o, a, n, i) { return Object(r.p)(), Object(r.d)('section', Q, [Object(r.g)('h3', W, Object(r.y)(o.title), 1), X]); } const tt = { props: { title: String } }; tt.render = Z; const et = tt; const ot = { class: 'filters mb-3' }; const rt = Object(r.g)('h3', { class: 'mb-3' }, 'Фильтры', -1); const at = { action: '/', method: 'GET' }; const nt = { class: 'row' }; const it = { class: 'col-md-6 mb-3' }; const ct = Object(r.g)('label', { class: 'form-label', for: 'publisher' }, 'Издательство', -1); const st = { class: 'col-md-6 mb-3' }; const ut = Object(r.g)('label', { class: 'form-label', for: 'year' }, 'Год издания', -1); const lt = { class: 'row mb-4' }; const bt = { class: 'col-md-12 mb-3' }; const dt = Object(r.g)('label', { class: 'form-label', for: 'authors' }, 'Авторы', -1); const ft = Object(r.g)('button', { type: 'reset', class: 'button' }, 'Сбросить', -1); const pt = Object(r.g)('hr', null, null, -1); function vt(t, e, o, a, n, i) {
      return Object(r.p)(), Object(r.d)('div', ot, [rt, Object(r.g)('form', at, [Object(r.g)('div', nt, [Object(r.g)('div', it, [ct, Object(r.D)(Object(r.g)('input', {
        type: 'text', id: 'publisher', name: 'publisher', placeholder: 'ООО "Счастливый мир"', class: 'form-control', 'onUpdate:modelValue': e[1] || (e[1] = function (t) { return n.publisher = t; }),
      }, null, 512), [[r.B, n.publisher]])]), Object(r.g)('div', st, [ut, Object(r.D)(Object(r.g)('input', {
        type: 'number', id: 'year', placeholder: '2021', name: 'year', class: 'form-control', min: '1950', max: '2021', 'onUpdate:modelValue': e[2] || (e[2] = function (t) { return n.year = t; }),
      }, null, 512), [[r.B, n.year]])])]), Object(r.g)('div', lt, [Object(r.g)('div', bt, [dt, Object(r.D)(Object(r.g)('input', {
        type: 'text', id: 'authors', name: 'authors', placeholder: 'Иванов, Петров', class: 'form-control', 'onUpdate:modelValue': e[3] || (e[3] = function (t) { return n.authors = t; }),
      }, null, 512), [[r.B, n.authors, void 0, { trim: !0 }]])])]), Object(r.g)('button', {
        onClick: e[4] || (e[4] = function (e) { return t.$emit('filters', { publisher: n.publisher, year: n.year, authors: n.authors }); }), type: 'button', class: 'button primary me-4', value: 'submit',
      }, ' Применить '), ft]), pt]);
    } const ht = o('53ca'); const gt = { name: 'appFilters', data() { return { publisher: '', year: '', authors: '' }; }, emits: { filters(t) { return Object(ht.a)(t) === 'object'; } } }; o('855f'); gt.render = vt; const Ot = gt; const jt = { class: 'find mb-3' }; const mt = Object(r.g)('h3', { class: 'mb-3' }, 'Поиск', -1); const yt = { class: 'row' }; const kt = Object(r.g)('label', { class: 'col-lg-2 col-form-label', for: 'name_books' }, 'Название книги:', -1); const Bt = { class: 'col-lg-8 mb-3' }; const wt = Object(r.g)('hr', null, null, -1); function St(t, e, o, a, n, i) {
      return Object(r.p)(), Object(r.d)('div', jt, [mt, Object(r.g)('div', yt, [kt, Object(r.g)('div', Bt, [Object(r.D)(Object(r.g)('input', {
        class: 'form-control', id: 'name_books', type: 'text', placeholder: 'Евгений Онегин', 'onUpdate:modelValue': e[1] || (e[1] = function (t) { return n.name = t; }), onKeydown: e[2] || (e[2] = Object(r.E)((function () { return i.dispatchSearch && i.dispatchSearch.apply(i, arguments); }), ['enter'])),
      }, null, 544), [[r.B, n.name, void 0, { trim: !0 }]])]), Object(r.g)('button', { onClick: e[3] || (e[3] = function () { return i.dispatchSearch && i.dispatchSearch.apply(i, arguments); }), type: 'button', class: 'button primary col-lg-2 ms-3' }, ' Поиск ')]), wt]);
    } const Ct = {
      name: 'appSearch', emits: { search(t) { return typeof t === 'string'; } }, data() { return { name: '' }; }, methods: { dispatchSearch() { this.$emit('search', this.name); } },
    }; Ct.render = St; const _t = Ct; const Ft = { class: 'sort mb-3' }; const Rt = Object(r.g)('h3', { class: 'mb-3' }, 'Сортировка', -1); const xt = { action: '/', method: 'GET' }; const Lt = { class: 'row' }; const Nt = { class: 'col-md-4 mb-3' }; const It = Object(r.g)('label', { class: 'form-label', for: 'sort_name' }, 'По алфавиту: ', -1); const At = Object(r.g)('option', { disabled: '', value: '' }, 'Выберите способ сортировки', -1); const zt = Object(r.g)('option', { value: 'a-z', selected: '' }, 'А-Я', -1); const Jt = Object(r.g)('option', { value: 'z-a' }, 'Я-А', -1); const $t = { class: 'col-md-4 mb-3' }; const qt = Object(r.g)('label', { class: 'form-label', for: 'sort_rating' }, 'По рейтингу: ', -1); const Dt = Object(r.g)('option', { disabled: '', value: '' }, 'Выберите способ сортировки', -1); const Ut = Object(r.g)('option', { value: 'a-z', selected: '' }, 'Самый высокий', -1); const Et = Object(r.g)('option', { value: 'z-a' }, 'Самый низкий', -1); const Mt = { class: 'col-md-4 mb-3' }; const Pt = Object(r.g)('label', { class: 'form-label', for: 'sort_year' }, 'По дате издания: ', -1); const Vt = Object(r.g)('option', { disabled: '', value: '' }, 'Выберите способ сортировки', -1); const Yt = Object(r.g)('option', { value: 'a-z', selected: '' }, 'Новые вверху', -1); const Tt = Object(r.g)('option', { value: 'z-a' }, 'Старые вверху', -1); function Gt(t, e, o, a, n, i) {
      return Object(r.p)(), Object(r.d)('div', Ft, [Rt, Object(r.g)('form', xt, [Object(r.g)('div', Lt, [Object(r.g)('div', Nt, [It, Object(r.D)(Object(r.g)('select', {
        id: 'sort_name', class: 'form-select', 'aria-label': 'sort_name', 'onUpdate:modelValue': e[1] || (e[1] = function (t) { return n.sort_name = t; }), onChange: e[2] || (e[2] = function () { return i.selectedSortByName && i.selectedSortByName.apply(i, arguments); }),
      }, [At, zt, Jt], 544), [[r.A, n.sort_name]])]), Object(r.g)('div', $t, [qt, Object(r.D)(Object(r.g)('select', {
        id: 'sort_rating', class: 'form-select', 'aria-label': 'sort_rating', 'onUpdate:modelValue': e[3] || (e[3] = function (t) { return n.sort_rating = t; }), onChange: e[4] || (e[4] = function () { return i.selectedSortByRating && i.selectedSortByRating.apply(i, arguments); }),
      }, [Dt, Ut, Et], 544), [[r.A, n.sort_rating]])]), Object(r.g)('div', Mt, [Pt, Object(r.D)(Object(r.g)('select', {
        id: 'sort_year', class: 'form-select', 'aria-label': 'sort_year', 'onUpdate:modelValue': e[5] || (e[5] = function (t) { return n.sort_year = t; }), onChange: e[6] || (e[6] = function () { return i.selectedSortByYear && i.selectedSortByYear.apply(i, arguments); }),
      }, [Vt, Yt, Tt], 544), [[r.A, n.sort_year]])])]), Object(r.g)('button', { type: 'reset', onClick: e[7] || (e[7] = function () { return i.clearSort && i.clearSort.apply(i, arguments); }), class: 'button' }, 'Сбросить')])]);
    } const Ht = {
      name: 'appSort',
      data() { return { sort_name: '', sort_rating: '', sort_year: '' }; },
      emits: {
        'sort-name': function (t) { return typeof t === 'string'; }, 'sort-rating': function (t) { return typeof t === 'string'; }, 'sort-year': function (t) { return typeof t === 'string'; }, clearSort: null,
      },
      methods: {
        selectedSortByName() { this.$emit('sort-name', this.sort_name), this.sort_rating = '', this.sort_year = ''; }, selectedSortByRating() { this.$emit('sort-rating', this.sort_rating), this.sort_name = '', this.sort_year = ''; }, selectedSortByYear() { this.$emit('sort-year', this.sort_year), this.sort_name = '', this.sort_rating = ''; }, clearSort() { this.$emit('clearSort'), this.sort_name = '', this.sort_rating = '', this.sort_year = ''; },
      },
    }; Ht.render = Gt; const Kt = Ht; const Qt = {
      components: {
        AppFilters: Ot, AppSort: Kt, AppSearch: _t, AppBooks: K, EmptyCard: et,
      },
      name: 'Home',
      inject: ['dataBooks', 'favoriteBooks'],
      data() { return { filteredBooks: this.dataBooks, sortedBooks: [] }; },
      methods: {
        dispatchFavorite(t) { const e = this.searchBook(t); e.favourite = !e.favourite, e.favourite ? this.addFavorite(e) : this.removeFavorite(e); }, addFavorite(t) { if (this.favoriteBooks.length) { const e = this.hasFavourite(t); e || this.favoriteBooks.push(t); } else this.favoriteBooks.push(t); }, removeFavorite(t) { if (this.favoriteBooks.length) { const e = this.hasFavourite(t); if (e) { const o = this.searchIndexFavourite(t.id); this.favoriteBooks.splice(o, 1), this.filteredBooks.forEach(((e) => { e.id === t.id && (e.favourite = !e.favourite); })); } } }, hasFavourite(t) { const e = this.favoriteBooks.map(((e) => e.id === t.id)); return !0 === e[0]; }, searchIndexFavourite(t) { let e = null; return this.favoriteBooks.forEach(((o, r) => { o.id === t && (e = r); })), e; }, upCount(t) { const e = this.searchBook(t); e.rating += 1, e.isChangeRating = !1; }, downCount(t) { const e = this.searchBook(t); e.rating -= 1, e.isChangeRating = !1; }, searchBook(t) { return this.filteredBooks[t]; }, searchBooks(t) { const e = this.dataBooks.filter(((e) => e.name.toLowerCase().includes(t.toLowerCase()))); this.filteredBooks = e; }, dispatchFilteredBooks(t) { const e = this.filteredBooks.filter(((e) => e.publisher.toLowerCase().includes(t.publisher.toLowerCase()))); const o = e.filter(((e) => e.year.toLowerCase().includes(t.year.toLowerCase()))); const r = o.filter(((e) => e.authors.toLowerCase().includes(t.authors.toLowerCase()))); this.filteredBooks = r; }, sortByName(t) { this.sortedBooks = []; const e = Object(m.a)(this.filteredBooks); t === 'a-z' && e.sort(((t, e) => { const o = t.name.toLowerCase(); const r = e.name.toLowerCase(); return o < r ? -1 : o > r ? 1 : 0; })), t === 'z-a' && e.sort(((t, e) => { const o = t.name.toLowerCase(); const r = e.name.toLowerCase(); return o < r ? 1 : o > r ? -1 : 0; })), this.sortedBooks = e; }, sortByRating(t) { this.sortedBooks = []; const e = Object(m.a)(this.filteredBooks); t === 'a-z' && e.sort(((t, e) => { const o = +t.rating; const r = +e.rating; return o < r ? 1 : o > r ? -1 : 0; })), t === 'z-a' && e.sort(((t, e) => { const o = +t.rating; const r = +e.rating; return o < r ? -1 : o > r ? 1 : 0; })), this.sortedBooks = e; }, sortByYear(t) { this.sortedBooks = []; const e = Object(m.a)(this.filteredBooks); t === 'a-z' && e.sort(((t, e) => { const o = +t.year; const r = +e.year; return o < r ? 1 : o > r ? -1 : 0; })), t === 'z-a' && e.sort(((t, e) => { const o = +t.year; const r = +e.year; return o < r ? -1 : o > r ? 1 : 0; })), this.sortedBooks = e; }, clearSort() { this.sortedBooks = []; },
      },
      computed: { calcSort() { return this.sortedBooks.length ? this.sortedBooks : this.filteredBooks; } },
      created() { const t = localStorage.getItem('sorted-books'); const e = localStorage.getItem('filtered-books'); t && (this.sortedBooks = JSON.parse(t)), e && (this.filteredBooks = JSON.parse(t)); },
      watch: { sortedBooks() { localStorage.setItem('sorted-books', JSON.stringify(this.sortedBooks)); }, filteredBooks() { localStorage.setItem('filtered-books', JSON.stringify(this.filteredBooks)); } },
    }; o('4940'); Qt.render = j, Qt.__scopeId = 'data-v-641454f7'; const Wt = Qt; const Xt = Object(r.F)('data-v-aa3869e6'); Object(r.s)('data-v-aa3869e6'); const Zt = { class: 'favourites' }; const te = Object(r.g)('section', { class: 'card' }, [Object(r.g)('h1', { class: 'text-center mb-5' }, 'Список избранных книг')], -1); Object(r.q)(); const ee = Xt(((t, e, o, a, n, i) => {
      const c = Object(r.w)('empty-card'); const s = Object(r.w)('app-favourite'); return Object(r.p)(), Object(r.d)('div', Zt, [te, n.favourites.length ? (Object(r.p)(!0), Object(r.d)(r.a, { key: 1 }, Object(r.v)(n.favourites, ((t, e) => (Object(r.p)(), Object(r.d)(s, {
        key: t.id, book: t, identity: e, onRemoveFavourite: i.removeFavorite,
      }, null, 8, ['book', 'identity', 'onRemoveFavourite'])))), 128)) : (Object(r.p)(), Object(r.d)(c, { key: 0, title: '' }))]);
    })); const oe = Object(r.F)('data-v-33ac196f'); Object(r.s)('data-v-33ac196f'); const re = { class: 'card' }; const ae = { class: 'book' }; const ne = { class: 'book-info' }; const ie = { class: 'book-name mb-3' }; const ce = { class: 'book-author' }; const se = Object(r.f)(' Автор: '); const ue = { class: 'book-publisher' }; const le = Object(r.f)(' Издательство: '); const be = { class: 'book-date' }; const de = Object(r.f)(' Дата выхода: '); const fe = { class: 'book-remove' }; Object(r.q)(); const pe = oe(((t, e, o, a, n, i) => (Object(r.p)(), Object(r.d)('section', re, [Object(r.g)('div', ae, [Object(r.g)('div', ne, [Object(r.g)('h3', ie, [Object(r.g)('strong', null, Object(r.y)(o.book.name), 1)]), Object(r.g)('p', ce, [se, Object(r.g)('strong', null, Object(r.y)(o.book.authors), 1)]), Object(r.g)('p', ue, [le, Object(r.g)('strong', null, Object(r.y)(o.book.publisher), 1)]), Object(r.g)('p', be, [de, Object(r.g)('time', null, [Object(r.g)('strong', null, Object(r.y)(o.book.year), 1)])])]), Object(r.g)('div', fe, [Object(r.g)('button', { onClick: e[1] || (e[1] = function (e) { return t.$emit('remove-favourite', o.identity, o.book.id); }), class: 'button danger' }, 'Удалить')])])])))); const ve = {
      components: {}, name: 'appBooks', inject: ['dataBooks', 'favoriteBooks'], props: { book: Object, identity: Number }, emits: { 'remove-favourite': function (t) { return typeof t === 'number'; } },
    }; o('2315'); ve.render = pe, ve.__scopeId = 'data-v-33ac196f'; const he = ve; const ge = {
      components: { EmptyCard: et, AppFavourite: he }, name: 'Favourites', inject: ['dataBooks', 'favoriteBooks'], data() { return { favourites: this.favoriteBooks }; }, methods: { removeFavorite(t, e) { this.favourites = this.favourites.filter(((e, o) => o !== t)), this.favoriteBooks.splice(t, 1), this.dataBooks.forEach(((t) => { t.id === e && (t.favourite = !t.favourite); })); } }, created() { const t = localStorage.getItem('favourites'); t && (this.favourites = JSON.parse(t)); }, watch: { favourites() { localStorage.setItem('favourites', JSON.stringify(this.favourites)); } },
    }; o('1bce'); ge.render = ee, ge.__scopeId = 'data-v-aa3869e6'; const Oe = ge; const je = [{ path: '/', name: 'Home', component: Wt }, { path: '/favourites', name: 'Favourites', component: Oe }]; const me = Object(f.a)({ history: Object(f.b)(), routes: je }); const ye = me; o('a589'); Object(r.c)(d).use(ye).mount('#app');
  },
  '61de': function (t, e, o) {},
  '79ca': function (t, e, o) {
    o('dba5');
  },
  '855f': function (t, e, o) {
    o('8d34');
  },
  '8d34': function (t, e, o) {},
  a589(t, e, o) {},
  c721(t, e, o) {
    o.d(e, 'a', (() => l)); const r = o('7a23'); const a = Object(r.F)('data-v-43ef5c1c'); Object(r.s)('data-v-43ef5c1c'); const n = { class: 'navbar' }; const i = Object(r.g)('h3', null, 'ip-books', -1); const c = { class: 'navbar-menu' }; const s = Object(r.f)('Главная'); const u = Object(r.f)('Избранное'); Object(r.q)(); var l = a(((t, e, o, l, b, d) => { const f = Object(r.w)('router-link'); return Object(r.p)(), Object(r.d)('header', n, [i, Object(r.g)('ul', c, [Object(r.g)('li', null, [Object(r.g)(f, { to: '/' }, { default: a((() => [s])), _: 1 })]), Object(r.g)('li', null, [Object(r.g)(f, { to: '/favourites' }, { default: a((() => [u])), _: 1 })])])]); }));
  },
  dba5(t, e, o) {},
}));
// # sourceMappingURL=app.7758f139.js.map
