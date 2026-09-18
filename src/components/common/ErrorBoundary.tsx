import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw, Home, ChevronDown, ChevronUp } from 'lucide-react';
import { Tape } from './Tape';
import { Sticker } from './Sticker';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  showDetails: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
    showDetails: false
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false
    });
    window.location.href = '/';
  };

  private toggleDetails = () => {
    this.setState(prevState => ({ showDetails: !prevState.showDetails }));
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-[#F5F1E8] text-[#173A5D] flex items-center justify-center p-4 sm:p-6 md:p-10 relative overflow-hidden selection:bg-[#12395D] selection:text-[#F5F1E8]">
          {/* Subtle paper grain texture */}
          <div className="absolute inset-0 bg-paper-grain opacity-60 pointer-events-none" />

          {/* Decorative stamp in background corner */}
          <div className="absolute top-8 right-8 hidden sm:block opacity-35 pointer-events-none">
            <Sticker type="cancellation" rotation={-8} />
          </div>

          <div className="relative z-10 max-w-xl w-full">
            {/* Scrapbook card enclosure */}
            <div className="relative bg-[#FFFFFF] p-6 sm:p-10 shadow-[0_20px_50px_rgba(18,57,93,0.14)] border border-[#E9E2D5] select-none">
              {/* Washi tape on top center */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                <Tape variant="navy" width="w-28" height="h-7" rotation={-1.5} />
              </div>

              {/* Status pill & script */}
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-[#315D7E]/15">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A83232] animate-pulse" />
                  <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#A83232]">
                    System Notice • Error Caught
                  </span>
                </div>
                <span className="font-script text-xl text-[#6F8DA5]">
                  an unexpected tear
                </span>
              </div>

              {/* Serif Headline */}
              <h1 className="font-display text-3xl sm:text-4xl text-[#173B5D] font-normal tracking-tight leading-tight mb-3">
                A brief pause in the editorial gallery
              </h1>

              {/* Description */}
              <p className="font-body text-xs sm:text-sm text-[#315D7E] leading-relaxed mb-6">
                Something interrupted the composition of this page. Don't worry—the portfolio and
                curated archives are intact. You can reload the gallery or return to the main cover.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={this.handleReset}
                  className="px-5 py-2.5 bg-[#173B5D] text-[#F5F1E8] font-body text-xs font-semibold tracking-wider uppercase flex items-center gap-2 hover:bg-[#12395D] transition-colors shadow-xs"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reload Studio</span>
                </button>

                <a
                  href="/"
                  className="px-5 py-2.5 bg-[#E9E2D5] text-[#173B5D] font-body text-xs font-semibold tracking-wider uppercase border border-[#315D7E]/30 flex items-center gap-2 hover:bg-[#DCD4C4] transition-colors"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Back to Cover</span>
                </a>
              </div>

              {/* Technical Details Accordion */}
              {this.state.error && (
                <div className="mt-8 pt-6 border-t border-dashed border-[#315D7E]/20">
                  <button
                    onClick={this.toggleDetails}
                    className="flex items-center justify-between w-full text-left font-mono text-[11px] text-[#6F8DA5] uppercase tracking-wider hover:text-[#173B5D] transition-colors"
                  >
                    <span>Technical Log (For Engineers)</span>
                    {this.state.showDetails ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>

                  {this.state.showDetails && (
                    <div className="mt-3 p-3.5 bg-[#12395D]/5 border border-[#315D7E]/20 rounded-xs overflow-x-auto text-[11px] font-mono text-[#173A5D]">
                      <p className="font-bold text-[#A83232] mb-1">
                        {this.state.error.name}: {this.state.error.message}
                      </p>
                      {this.state.error.stack && (
                        <pre className="text-[10px] text-gray-600 whitespace-pre-wrap leading-tight mt-2 max-h-40 overflow-y-auto">
                          {this.state.error.stack}
                        </pre>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
