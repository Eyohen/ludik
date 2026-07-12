import { teamMembers } from '../../data/team'
import { assetUrl } from '../../utils/assetUrl'

const AdminTeam = () => (
  <div>
    <div>
      <h1 className="text-2xl font-extrabold text-[#071b3a]">Team Members</h1>
      <p className="mt-1 text-sm text-[#526173]">
        {teamMembers.length} member{teamMembers.length !== 1 ? 's' : ''} — displayed directly on the public Team page
      </p>
    </div>

    <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {teamMembers.map((member) => (
        <div key={member.id} className="overflow-hidden rounded-lg border border-[#e7ddaa] bg-white shadow-sm">
          <div className="h-44 overflow-hidden bg-[#0e2f5a]/10">
            <img
              src={assetUrl(member.imageUrl)}
              alt={member.name}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="p-5">
            <h3 className="font-extrabold text-[#071b3a]">{member.name}</h3>
            <p className="text-sm font-bold text-[#b48f10]">{member.title}</p>
            {member.bio && (
              <p className="mt-2 line-clamp-3 whitespace-pre-line text-sm leading-6 text-[#526173]">{member.bio}</p>
            )}
            {member.credentials?.length > 0 && (
              <ul className="mt-2 list-disc space-y-0.5 pl-5 text-sm leading-6 text-[#526173]">
                {member.credentials.map((credential) => <li key={credential}>{credential}</li>)}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>

    <p className="mt-6 text-sm text-[#526173]">
      Team details are managed in <code className="rounded bg-white px-1.5 py-1">src/data/team.js</code> so every visitor sees the same current list.
    </p>
  </div>
)

export default AdminTeam
