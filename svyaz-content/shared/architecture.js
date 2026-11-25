document.querySelectorAll('.site-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const nav = button.closest('header').querySelector('.site-nav');
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
});
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('[data-kind]').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.kind !== button.dataset.filter;
    });
  });
});
const serviceNames = {
  proektirovanie: 'Проектирование и изыскания',
  stroitelstvo: 'Строительство ВОЛС и медных линий',
  'zemlyanye-raboty': 'Канализация и земляные работы',
  perehody: 'Скрытые и бестраншейные переходы',
  montazh: 'Монтаж, наладка и измерения',
  ognezashchita: 'Огнезащита кабелей',
  obsluzhivanie: 'Обслуживание и восстановление',
  'sovmestnoe-stroitelstvo': 'Совместное строительство'
};
document.querySelectorAll('.arc-form').forEach(form => {
  const service = new URLSearchParams(location.search).get('service');
  if (Object.prototype.hasOwnProperty.call(serviceNames, service)) {
    form.elements.namedItem('Работы').value = serviceNames[service];
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const entries = [...new FormData(form)]
      .map(([key, value]) => [key, String(value).trim()])
      .filter(([, value]) => value);
    const body = entries.map(([key, value]) => `${key}: ${value}`).join('\r\n');
    location.href = 'mailto:info@svyazconnect.ru?subject=' +
      encodeURIComponent('Запрос по работам ВОЛС') + '&body=' + encodeURIComponent(body);
  });
});
