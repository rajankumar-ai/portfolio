import Card from "../../components/ui/Card";

function ContactInfo() {
  return (
    <Card>
      <h3 className="text-3xl font-bold text-white">
        Let's Work Together
      </h3>

      <p className="mt-5 leading-8 text-slate-400">
        I'm available for freelance projects, full-time opportunities,
        consulting, and collaborations.
      </p>

      <div className="mt-8 space-y-4">
        <div>
          <p className="text-blue-400">Email</p>
          <p className="text-white">
            your@email.com
          </p>
        </div>

        <div>
          <p className="text-blue-400">Location</p>
          <p className="text-white">
            India
          </p>
        </div>

        <div>
          <p className="text-blue-400">Availability</p>
          <p className="text-white">
            Open to Opportunities
          </p>
        </div>
      </div>
    </Card>
  );
}

export default ContactInfo;