import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-24 text-center text-zinc-600 font-mono text-xs">
          Erro ao carregar seção. Recarregue a página.
        </div>
      );
    }

    return this.props.children;
  }
}
