function getDay(date) {
    let day = date.getDay();
    return day === 0 ? 6 : day - 1;
  }
  
  function createCalendar(elem, year, month) {
    const monthIndex = month - 1;
    const date = new Date(year, monthIndex);
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const firstDayIndex = getDay(new Date(year, monthIndex, 1));
    const lastDayIndex = getDay(new Date(year, monthIndex, daysInMonth));
    const tableRows = [];
    let tableRow = '<tr>';
  
    // заполняем первую строку пустыми ячейками до первого дня месяца
    for (let i = 0; i < firstDayIndex; i++) {
      tableRow += '<td></td>';
    }
  
    // заполняем остальные ячейки датами
    for (let day = 1; day <= daysInMonth; day++) {
      tableRow += `<td>${day}</td>`;
      if (getDay(new Date(year, monthIndex, day)) === 6 || day === daysInMonth) {
        // если это последний день месяца или суббота, заканчиваем строку
        tableRows.push(tableRow + '</tr>');
        tableRow = '<tr>';
      }
    }
  
    // заполняем последнюю строку пустыми ячейками после последнего дня месяца
    for (let i = lastDayIndex + 1; i < 7; i++) {
      tableRow += '<td></td>';
    }
  
    tableRows.push(tableRow + '</tr>');
  
    const table = `<table><thead><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr></thead><tbody>${tableRows.join('')}</tbody></table>`;
  
    elem.innerHTML = table;
  }
  
  
  createCalendar(document.getElementById('calendar'), 2012, 9);