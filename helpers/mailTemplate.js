async function mailTemplate(link) {
  const html = `<div
    style="display: flex; flex-direction: column; width: 600px; height: 400px; background: #ffffff;">
    <div
      style="width: 600px; height: 100px; display: flex; flex-direction: row"
    >
      <div style="height: 100px; width: 100px; background: #e8b20f;border-radius: 0 70px 0 0"></div>
      <div style="height: 100px; width: 100px"></div>
      <div style="height: 100px; width: 100px; background: #f4f8fb"></div>
      <div style="height: 100px; width: 100px; background: #afd5f9;border-radius: 70px 0 0 0"></div>
      <div style="height: 100px; width: 100px; background: #e8b30f;border-radius: 0 70px 0 0"></div>
      <div style="height: 100px; width: 100px"></div>
    </div>
    <div
      style="width: 600px; height: 100px; display: flex; flex-direction: row"
    >
      <div style="height: 100px; width: 100px"></div>
      <div style="height: 100px; width: 100px; background: #afd5f9"></div>
      <div style="height: 100px; width: 100px"></div>
      <div style="height: 100px; width: 100px; background: #0f408f;"></div>
      <div style="height: 100px; width: 100px"></div>
      <div style="height: 100px; width: 100px; background: #afd5f9"></div>
    </div>
    <div
      style="width: 600px; height: 100px; display: flex; flex-direction: row"
    >
      <div style="height: 100px; width: 100px; background: #e8b30f;border-radius: 0 0 0 70px"></div>
      <div
        style="
          height: 100px;
          width: 400px;
          display: grid;
          align-items: center;
          align-content: center;
          font-size: 1.8rem;
          font-weight: bold;
          text-align: center;
        "
      >
        Dostepny jest nowy plan <a href="${link}">Pobierz</a>
      </div>
      <div style="height: 100px; width: 100px; background: #f4f8fb"></div>
    </div>
    <div
      style="width: 600px; height: 100px; display: flex; flex-direction: row"
    >
      <div style="height: 100px; width: 100px; background: #0f408f;border-radius: 70px 0 0 0"></div>
      <div style="height: 100px; width: 100px; background: #e8b30f;border-radius: 0 70px 0 0"></div>
      <div style="height: 100px; width: 100px; background: #afd5f9;"></div>
      <div style="height: 100px; width: 100px"></div>
      <div style="height: 100px; width: 100px; background: #0f408f"></div>
      <div style="height: 100px; width: 100px; background: #e8b30f;border-radius: 0 0 0 70px"></div>
    </div>
  </div>`;
  return html;
}

module.exports = mailTemplate;
