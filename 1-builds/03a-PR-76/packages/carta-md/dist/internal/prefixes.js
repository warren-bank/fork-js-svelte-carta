export const defaultPrefixes = [
    {
        id: 'taskList',
        match: (line) => {
            const prefix = line.slice(0, 5);
            if (prefix.includes('- []'))
                return prefix;
            if (prefix.includes('- [ ]'))
                return prefix;
            if (prefix.includes('- [x]'))
                return prefix;
        },
        maker: () => '- [ ] '
    },
    {
        id: 'bulletedList',
        match: (line) => {
            const prefix = line.slice(0, 2);
            if (prefix === '- ')
                return prefix;
        },
        maker: () => '- '
    },
    {
        id: 'numberedList',
        match: (line) => line.match(/^\d+\./)?.at(0),
        maker: (prev) => `${Number(prev.slice(0, -1)) + 1}. `
    },
    {
        id: 'blockquote',
        match: (line) => line.match(/^(> *)+/gm)?.at(0),
        maker: (prev) => prev
    }
];
