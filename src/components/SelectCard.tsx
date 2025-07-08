import React, { ReactNode } from 'react'

type SelectCardProps = React.ComponentPropsWithoutRef<"div"> & {
    children: ReactNode;
};

type SelectCardSubComponent = {
    Title: React.FC<{ children: ReactNode }>
    Description: React.FC<{ children: ReactNode }>
};

const SelectCard: React.FC<SelectCardProps> & SelectCardSubComponent = ({ children, ...props }) => {
    return (
        <div className="group min-w-0 overflow-hidden h-full w-full flex flex-col justify-start gap-4 bg-accent-100 dark:bg-accent-900  flex-[1] transition-[flex] hover:flex-[2] rounded-2xl ease-spring duration-(--spring-duration) p-10 relative " {...props}>
            {children}
        </div>
    );
};

SelectCard.Title = ({ children }) => (
    <h2 className="text-7xl font-mono group-hover:tracking-widest transition-all ease-spring duration-(--spring-duration) ">{children}</h2>
)
SelectCard.Title.displayName = "SelectCard.Title"

SelectCard.Description = ({ children }) => (
    <p className="text-2xl">{children}</p>
)
SelectCard.Description.displayName = "SelectCard.Description"

export default SelectCard


