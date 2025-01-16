export function BadgeCard({
    title,
    description,
}: {
    title: string;
    description?: string;
}) {
    return (
        <div className="border-l-4 border-red-400 px-4 py-2">
            <h3 className="text-xl font-bold">{title}</h3>
            {description && <p>{description}</p>}
        </div>
    );
}
