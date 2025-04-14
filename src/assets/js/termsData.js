const termsSections = [
    {
        id: "services",
        title: "Our Services",
        content: [
          `The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation...`
        ]
      },
      {
        id: "intellectual-property",
        title: "Intellectual Property Rights",
        subSections: [
          {
            subtitle: "2.1 Our intellectual property",
            content: [
              `We are the owner or licensee of all intellectual property rights in our Services...`,
              `The Content and Marks are protected by copyright...`,
              `Provided "AS IS" for personal, non-commercial use.`
            ]
          },
          {
            subtitle: "2.2 Your use of our Services",
            content: [
              `Subject to compliance with our Legal Terms, you may:`,
              {
                type: "list",
                items: [
                  "Access the Services",
                  "Download/print permitted content for personal use"
                ]
              },
              `No copying or redistribution is allowed without permission.`,
            ]
          },
          {
            subtitle: "2.3 Your submissions",
            content: [
              `By sending feedback, you assign rights to us.`,
              {
                type: "list",
                items: [
                  "Agree to our Prohibited Activities policy",
                  "Waive moral rights to submissions",
                  "Ensure you have rights to share the content",
                  "Submissions aren't confidential"
                ]
              }
            ]
          }
        ]
      },

]



        {/* <ol className="terms-list px-6 py-10 max-w-5xl mx-auto text-gray-800">
          {termsSections.map(({ id, title, content, subSections }) => (
            <li key={id} id={id} className="table-content-title mb-8">
              <strong>{title}</strong>

              Main content paragraphs
              {content?.map((text, idx) =>
                typeof text === "string" ? (
                  <p key={idx} className="table-content-text mt-2">{text}</p>
                ) : text.type === "list" ? (
                  <ul key={idx} className="list-disc ml-6 mt-2">
                    {text.items.map((item, liIdx) => (
                      <li key={liIdx}>{item}</li>
                    ))}
                  </ul>
                ) : null
              )}

              Subsections
              {subSections?.map((sub, subIdx) => (
                <div key={subIdx} className="mt-6">
                  <p className="table-content-subtitle font-semibold">{sub.subtitle}</p>
                  {sub.content.map((text, i) =>
                    typeof text === "string" ? (
                      <p key={i} className="table-content-text mt-2">{text}</p>
                    ) : text.type === "list" ? (
                      <ul key={i} className="list-disc ml-6 mt-2">
                        {text.items.map((item, li) => (
                          <li key={li}>{item}</li>
                        ))}
                      </ul>
                    ) : null
                  )}
                </div>
              ))}
            </li>
          ))}
        </ol> */}