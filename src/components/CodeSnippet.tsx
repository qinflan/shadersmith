import type { BundledLanguage } from '@/components/ui/shadcn-io/code-block';
import {
    CodeBlock,
    CodeBlockBody,
    CodeBlockContent,
    CodeBlockCopyButton,
    CodeBlockFilename,
    CodeBlockFiles,
    CodeBlockHeader,
    CodeBlockItem,
} from '@/components/ui/shadcn-io/code-block';
import { useControls } from '@/hooks/ControlStore';
import { hsvaToRgba } from '@uiw/color-convert';

const CodeSnippet = () => {

    const { amplitude, animationSpeed, grain, hsva1, hsva2, hsva3, hsva4, hsva5, preset } = useControls();

    const hsvas = [hsva1, hsva2, hsva3, hsva4, hsva5];

    const colors = hsvas.map((hsva) => {
        const { r, g, b, a } = hsvaToRgba(hsva);
        return [
            +(r / 255).toFixed(3),
            +(g / 255).toFixed(3),
            +(b / 255).toFixed(3),
            +a.toFixed(3),
        ];
    });

    const installCommand = [
        {
            language: 'tsx',
            filename: 'install.tsx',
            code: 'npm install shadersmith-r3f',
        }
    ];

    const installPeerDeps = [
        {
            language: 'tsx',
            filename: 'install.tsx',
            code: 'npm install react react-dom three @react-three/fiber',
        }
    ]

    const importCode = [
        {
            language: 'tsx',
            filename: 'install.tsx',
            code: 'import { Shadersmith } from "shadersmith-r3f";',
        }
    ]

    const code = [
        {
            language: 'tsx',
            filename: 'custom.tsx',
            code: `<Shadersmith
    preset="${preset}"
    amplitude={${amplitude}}
    animationSpeed={${animationSpeed}}
    grain={${grain}}
    colors={[
${colors.map(c => `       [${c.join(", ")}],`).join("\n")}
    ]}
/>`,
        }
    ];

    return (
        <div className="w-[100%] md:w-[50vw] max-w-[500px] p-0 overflow-hidden flex flex-col gap-8 justify-end h-fit">

            <CodeBlock data={installPeerDeps} defaultValue={code[0].language} className="text-left">
                <CodeBlockHeader>
                    <CodeBlockCopyButton
                        onCopy={() => console.log('Copied code to clipboard')}
                        onError={() => console.error('Failed to copy code to clipboard')}
                    />
                    <p className="font-[Inter] text-left text-wrap tracking-tight text-foreground select-none">install peer dependencies</p>
                </CodeBlockHeader>
                <CodeBlockBody>
                    {(item) => (
                        <CodeBlockItem key={item.language} value={item.language}>
                            <CodeBlockContent language={item.language as BundledLanguage}>
                                {item.code}
                            </CodeBlockContent>
                        </CodeBlockItem>
                    )}
                </CodeBlockBody>
            </CodeBlock>

            <CodeBlock data={installCommand} defaultValue={code[0].language} className="text-left">
                <CodeBlockHeader>
                    <CodeBlockCopyButton
                        onCopy={() => console.log('Copied code to clipboard')}
                        onError={() => console.error('Failed to copy code to clipboard')}
                    />
                    <p className="font-[Inter] text-left text-wrap tracking-tight text-foreground select-none">install package</p>
                </CodeBlockHeader>
                <CodeBlockBody>
                    {(item) => (
                        <CodeBlockItem key={item.language} value={item.language}>
                            <CodeBlockContent language={item.language as BundledLanguage}>
                                {item.code}
                            </CodeBlockContent>
                        </CodeBlockItem>
                    )}
                </CodeBlockBody>
            </CodeBlock>

            <CodeBlock data={importCode} defaultValue={code[0].language} className="text-left">
                <CodeBlockHeader>
                    <CodeBlockCopyButton
                        onCopy={() => console.log('Copied code to clipboard')}
                        onError={() => console.error('Failed to copy code to clipboard')}
                    />
                    <p className="font-[Inter] text-left text-wrap tracking-tight text-foreground select-none">import package</p>
                </CodeBlockHeader>
                <CodeBlockBody>
                    {(item) => (
                        <CodeBlockItem key={item.language} value={item.language}>
                            <CodeBlockContent language={item.language as BundledLanguage}>
                                {item.code}
                            </CodeBlockContent>
                        </CodeBlockItem>
                    )}
                </CodeBlockBody>
            </CodeBlock>

            <CodeBlock data={code} defaultValue={code[0].language} className="text-left">
                <CodeBlockHeader>
                    <CodeBlockFiles>
                        {(item) => (
                            <CodeBlockFilename key={item.language} value={item.language}>
                                {item.filename}
                            </CodeBlockFilename>
                        )}
                    </CodeBlockFiles>
                    <CodeBlockCopyButton
                        onCopy={() => console.log('Copied code to clipboard')}
                        onError={() => console.error('Failed to copy code to clipboard')}
                    />
                </CodeBlockHeader>
                <CodeBlockBody>
                    {(item) => (
                        <CodeBlockItem key={item.language} value={item.language}>
                            <CodeBlockContent language={item.language as BundledLanguage}>
                                {item.code}
                            </CodeBlockContent>
                        </CodeBlockItem>
                    )}
                </CodeBlockBody>
            </CodeBlock>
        </div>
    )
}

export default CodeSnippet